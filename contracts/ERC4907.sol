// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC721Base.sol";
import "./IERC4907.sol";

contract ERC4907 is ERC721Base, IERC4907 {
    struct UserInfo {
        address user; // address of user role
        uint64 expires; // unix timestamp, user expires
        string propertyName;
        string location;
        uint256 price;
        string imageIPFSHash;
        address owner;
    }

    mapping(uint256 => UserInfo) internal _users;

    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}

    // Add your existing custom functionalities here from the old contract

    // ... (Other functions like mint, rentProperty, getUserProperties, etc.)

    /// @notice set the user and expires of a NFT
    /// @dev The zero address indicates there is no user
    /// Throws if `tokenId` is not valid NFT
    /// @param user  The new user of the NFT
    /// @param expires  UNIX timestamp, The new user could use the NFT before expires
    function setUser(
        uint256 tokenId,
        address user,
        uint64 expires,
        string memory _propertyName,
        string memory _location,
        uint256 _price,
        string memory _imageIPFSHash,
        address _owner
    ) public virtual {
        require(
            isApprovedOrOwner(msg.sender, tokenId),
            "ERC721: transfer caller is not owner nor approved"
        );
        UserInfo storage info = _users[tokenId];
        info.user = user;
        info.expires = expires;
        info.propertyName = _propertyName;
        info.location = _location;
        info.price = _price;
        info.imageIPFSHash = _imageIPFSHash;
        info.owner = _owner;
        emit UpdateUser(tokenId, user, expires);
    }

    // Additional custom functionalities and mappings from the old contract can be integrated similarly.

    /// @dev See {IERC165-supportsInterface}.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override
        returns (bool)
    {
        return
            interfaceId == type(IERC4907).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    // Add other custom functions and mappings from your old contract here.
}
