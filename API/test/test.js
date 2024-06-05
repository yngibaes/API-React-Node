import * as chai from 'chai'
import { expect } from 'chai'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const chaiHttp = require('chai-http')
import app from '../index.js'

const ChaiTest = chai.use(chaiHttp)

describe('GET /api/info',()=>{
    it('should GET all info',(done)=>{ //done is a callback function
        ChaiTest.request(app)  //chai.request is a function that sends a request to the app
        .get('/api/info')
        .end((err,res)=>{
            expect(err).to.be.null //expect is a function that compares the result of the request with the expected result
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('array') 
            expect(res.body).not.have.lengthOf(0)
            done()
        })
    })
})