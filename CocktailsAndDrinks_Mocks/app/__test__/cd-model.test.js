const config = require('../config/config');
const express = require('express');
const model = require('../model/cd-model');

const mockdb = require('./mock-db.test');


//GET
test('Assert retrieve data from Categories Table', async() => {
    const data = await model.category(15);
    expect(data.CATEGORIA).toBe("Whiskey");
});