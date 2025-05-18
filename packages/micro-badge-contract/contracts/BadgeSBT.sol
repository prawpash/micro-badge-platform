// SPDX-License-Identifier: MI
pragma solidity ^0.8.28;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Burnable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import {ERC721Pausable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract BadgeSBT is ERC721, ERC721URIStorage, ERC721Pausable, Ownable, ERC721Burnable {
    uint256 private _tokenIdCounter;

    struct BadgeTemplate {
        address issuer;
        string tokenURI;
    }

    BadgeTemplate[] public badgeTemplates;

    // Mapping: templateId => (user => claimed or not)
    mapping(uint256 => mapping(address => bool)) public hasClaimed;

    mapping(uint256 => address) public tokenIssuers;

    event BadgeCreated(uint256 indexed templateId, address indexed issuer, string tokenURI);
    event BadgeClaimed(uint256 indexed tokenId, uint256 indexed templateId, address indexed recipient);

    constructor(string memory name_, string memory symbol_, address initialOwner)
        ERC721(name_, symbol_)
        Ownable(initialOwner)
    {}


    // from open zeppelin wizard
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // --- Claim badge ---
    function claimBadge(uint256 templateId) external {
        require(templateId < badgeTemplates.length, "Invalid badge template");
        require(!hasClaimed[templateId][msg.sender], "Badge already claimed");

        BadgeTemplate memory badge = badgeTemplates[templateId];

        hasClaimed[templateId][msg.sender] = true;

        uint256 tokenId = _tokenIdCounter++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, badge.tokenURI);
        tokenIssuers[tokenId] = badge.issuer;

        emit BadgeClaimed(tokenId, templateId, msg.sender);
    }

    // --- Create badge template ---
    function createBadge(string memory targetTokenURI) external {
        badgeTemplates.push(BadgeTemplate({
            issuer: msg.sender,
            tokenURI: targetTokenURI
        }));

        emit BadgeCreated(badgeTemplates.length - 1, msg.sender, targetTokenURI);
    }

    // --- Get badge template ---
    function getBadgeTemplate(uint256 templateId) external view returns (
        address issuer,
        string memory targetTokenURI
    ) {
        require(templateId < badgeTemplates.length, "Invalid templateId");
        BadgeTemplate memory badge = badgeTemplates[templateId];
        return (badge.issuer, badge.tokenURI);
    }

    function getClaimedTemplates(address user) external view returns (uint256[] memory) {
        uint256 total = badgeTemplates.length;
        uint256 count = 0;

        // First, count how many claimed
        for (uint256 i = 0; i < total; i++) {
            if (hasClaimed[i][user]) {
                count++;
            }
        }

        // Allocate array
        uint256[] memory claimed = new uint256[](count);
        uint256 index = 0;

        for (uint256 i = 0; i < total; i++) {
            if (hasClaimed[i][user]) {
                claimed[index++] = i;
            }
        }

        return claimed;
    }

    function getTokenInfo(uint256 tokenId) external view returns (
        address owner,
        address issuer,
        string memory uri
    ) {
        address currentOwner = _ownerOf(tokenId);

        if (currentOwner == address(0)) {
            revert ERC721NonexistentToken(tokenId);
        }


        return (
            ownerOf(tokenId),
            tokenIssuers[tokenId],
            tokenURI(tokenId)
        );
    }

    function getTemplates(uint256 offset, uint256 limit) external view returns (BadgeTemplate[] memory) {
        uint256 total = badgeTemplates.length;

        if (offset >= total) {
            BadgeTemplate[] memory emptyArray = new BadgeTemplate[](0);
            return emptyArray; 
        }

        // Cap limit to avoid overflow
        uint256 end = offset + limit;
        if (end > total) {
            end = total;
        }

        uint256 size = end - offset;
        BadgeTemplate[] memory result = new BadgeTemplate[](size);

        for (uint256 i = 0; i < size; i++) {
            result[i] = badgeTemplates[offset + i];
        }

        return result;
    }

    function getTemplateCount() external view returns (uint256) {
        return badgeTemplates.length;
    }

    // --- Soulbound overrides ---

    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Pausable)
        returns (address)
    {
        address from = _ownerOf(tokenId);

        if (from != address(0) && to != address(0)) {
            revert("Soulbound: Transfer failed");
        }

        return super._update(to, tokenId, auth);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
