const express = require('express')
const router = express.Router()
const database = require('nedb')
const db = new database({ filename: 'database/database.db', autoload: true })