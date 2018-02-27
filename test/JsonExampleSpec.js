import { expect } from 'chai';
import { data } from "../src/Model"
import { parse } from "../src/JsonExample";

describe('Json Parsing Example', function(){

  let page = parse(data);

  it("it should map raw json keys 'pageid' to 'id', 'paragraphs_list' to 'paragraphs'", function(){
      expect(page.id).to.equal(313);
      expect(page.sections[0].sections[0].paragraphs.length).to.equal(2)
  });


  it('should parse json data from string into page', function(){

  })
});
