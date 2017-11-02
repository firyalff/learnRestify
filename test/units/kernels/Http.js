module.exports = () => {
  
  describe("Http kernel", function() {
    var app, spyUse
    
    beforeEach(function () {
      app = {
        use(obj) {}
      }
      
      spyUse = sinon.spy(app, 'use');

      Http(app)
    });

    it('should apply bodyParser.json as middleware', ()=> {
      spyUse.calledWith(bodyParser.json())
    })

    it('should apply bodyParser.urlencoded as middleware', ()=> {
      spyUse.calledWith(bodyParser.urlencoded({  extended: false }))
    })

  })````````
}



const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const sinon = require("sinon");
const bodyParser = proxyquire('body-parser', {json(){}, urlencoded(option){}});

const Http = require(`${process.env.PWD}/app/kernels/Http`);


class Http {
  static test() {

  }
}