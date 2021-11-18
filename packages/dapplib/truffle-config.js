require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remind atom install brave fresh traffic'; 
let testAccounts = [
"0xaea276935097f55a3e7316e90e45ad1727630837f7f8a503a454eb5968d782cd",
"0x716baea6ddfcc3e5f6e85221850c4d0865fb1db89fbae2916f031c03dd2a384b",
"0x05aee9bf7c4e0b86fdb28122af99dbe9af81e39c9840fa8457369b613e4ec73d",
"0x7849d618fb69f7617755ad095971f4827fa4ed87b1778107480f45b3573653ca",
"0x006c55bccb121c9b8c62b05b4235ad8bbf3c90f3f009e0050a873950a6a044be",
"0x7217696ba8de870c75f55acf2d2f780c01322a2096f3e1c1efcd257269f42faa",
"0x59842805e3aa8d62f2ba8b26edc0fbf850723db0c4aea647bad51c0d4323abe6",
"0x359ecc1adabd448616327896ee1bffb288df14f48df79493bcf3bfc68f6e77e7",
"0x4e6777a7b3354fd2047d7ef071220088a57ccd85762d4ae702c0f47b60bb31ac",
"0x4e6c956e0c1405d3e5bed3178eabd3acb4157c9bb04ac812472ebe1057f996f4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


