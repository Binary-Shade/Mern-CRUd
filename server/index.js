const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet') //helps protect your web application from common security vulnerabilities by setting HTTP headers that enhance security
const cors = require('cors') //for managing cross-origin requests

const app = express()
app.use(cors())
app.use(helmet())

