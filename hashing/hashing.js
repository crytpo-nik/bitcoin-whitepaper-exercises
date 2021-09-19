"use strict";

var crypto = require("crypto");
const { type } = require("os");
const { isInt16Array, isInt32Array } = require("util/types");

// The Power of a Smile
// by Tupac Shakur
var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

var Blockchain = {
	blocks: [],
};

// Genesis block
Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

// TODO: insert each line into blockchain
 for (let line of poem) {
	 creatblock(line)

 }
function creatblock(_data){
	let block = {
		index:Blockchain.blocks.length,
		prevHash:Blockchain.blocks[Blockchain.blocks.length - 1].hash,
		data: _data,
		timestamp: Date.now()
	}
	block.hash =blockHash(block)
	Blockchain.blocks.push(block)
	return block
	
}
// console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);


// **********************************

function blockHash(bl) {
	return crypto.createHash("sha256").update(
		// TODO: use block data to calculate hash
		`${bl.index};${bl.prevHash};${bl.data};${bl.timestamp}`
	).digest("hex");
}
// verify each block ( exept block 0)
function verifyblock (blo) {
	if (blo.data != '' 
	&& Number.isInteger(blo.index) 
	&& blo.index >= 0 
	&& blo.prevHash !=  '' 
	&& blo.hash == blockHash(blo)) {
		return true
	}
	else {
		return false
	}
}

// verify block 0
function verifyblock0 (blo) {
	if (blo.data != '' 
	&& Number.isInteger(blo.index) 
	&& blo.index >= 0 
	&& blo.prevHash !=  '' 
	&& blo.hash == blockHash(blo)) {
		return true
	}
	else {
		return false
	}
}

function verifyChain(bloc){
	for ( let i = 1 ; i < Blockchain.blocks.length - 1 ; i++){
		let response = true
		if (response == false) { break; }
		if (i == 0 ){response = verifyblock0(bloc.blocks[i])
			

		}
		else {response = verifyblock(bloc.blocks[i])

		}
		return response 
	}

}
console.log(verifyChain(Blockchain))
	