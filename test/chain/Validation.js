var { ChainValidation, ChainConfig } = require("../../lib/chain");
var assert = require("assert");

describe("ChainValidation", () => {


    describe("is_object_id", () => {
        it("Is valid object id", ()=> {
            assert(ChainValidation.is_object_id("1.3.0") === true);
        })

        it("Is not valid object id", ()=> {
            assert(ChainValidation.is_object_id("1.3") === false);
        })

        it("Not string", ()=> {
            assert(ChainValidation.is_object_id(3) === false);
        })
    })
    
    describe("setChainId", () => {
        it("Is chain id set Golos", ()=> {
            ChainConfig.setChainId("782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12");
            assert(ChainConfig.chain_id === "782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12");
        })

        it("Is chain id set Steem", ()=> {
            ChainConfig.setChainId("0000000000000000000000000000000000000000000000000000000000000000");
            assert(ChainConfig.chain_id === "0000000000000000000000000000000000000000000000000000000000000000");
        })
    })
        

});