//var _this;

var ecc_config = {
    address_prefix: "STM"
};

var _this = {
    core_asset: "STEEM",
    vest_asset: "VESTS",
    dollar_asset: "SBD",
    address_prefix: "STM",
    expire_in_secs: 15,
    expire_in_secs_proposal: 24 * 60 * 60,
    chain_id: "0000000000000000000000000000000000000000000000000000000000000000",
    networks: {
        Steem: {
            core_asset: "STEEM",
            vest_asset: "VESTS",
            dollar_asset: "SBD",
            address_prefix: "STM",
            chain_id: "0000000000000000000000000000000000000000000000000000000000000000"
        },
        Golos: {
            core_asset: "GOLOS",
            vest_asset: "GESTS",
            dollar_asset: "GBG",
            address_prefix: "GLS",
            chain_id: "782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12"
        }
    },
    /** Set a few properties for known chain IDs. */
    setChainId: function(chain_id) {

        var i, len, network, network_name, ref;
        ref = Object.keys(_this.networks);

        for (i = 0, len = ref.length; i < len; i++) {

            network_name = ref[i];
            network = _this.networks[network_name];

            if (network.chain_id === chain_id) {

                _this.network_name = network_name;

                if (network.address_prefix) {
                    _this.address_prefix = network.address_prefix;
                    _this.dollar_asset = network.dollar_asset;
                    _this.vest_asset = network.vest_asset;
                    _this.core_asset = network.core_asset;

                    ecc_config.address_prefix = network.address_prefix;
                    _this.chain_id = chain_id;
                }

                console.log("INFO    Configured for", network_name, ":", network.core_asset, "\n");

                return {
                    network_name: network_name,
                    network: network
                }
            }
        }

        if (!_this.network_name) {
            console.log("Unknown chain id (this may be a testnet)", chain_id);
        }

    },

    reset: function() {
        _this.core_asset = "STEEM";
        _this.address_prefix = "STM";
        ecc_config.address_prefix = "STM";
        _this.expire_in_secs = 15;
        _this.expire_in_secs_proposal = 24 * 60 * 60;

        console.log("Chain config reset");
    },

    setPrefix: function(prefix = "STM") {
        _this.address_prefix = prefix;
        ecc_config.address_prefix = prefix;
    }
}
module.exports = _this;