#!/usr/bin/env node
const commander = require('commander');
const fetch = require('node-fetch');

const getPage = async location => {
	const response = await fetch(location);
	return await response.text();
}

commander
	.version('v1')
	.description('AWESOME');

commander
	.command('get <location>')
	.action(async location => {
		console.log(await getPage(location))
	})

commander.parse(process.argv);
