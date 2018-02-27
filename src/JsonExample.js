export function parse(text) {
  let page = JSON.parse(text);
  return {
    "title":page.title || "none",
    "id":page.pageid || -1,
    "sections":page.sections.map(sec => {
      return remapSection(sec)
    })
  };
}

function remapSection(section){
  let mappedSection = {};

  mappedSection.heading = section.heading;
  mappedSection.paragraphs = section.paragraphs_list.map(function(it){
    return {
      "id":it.paragraph_id || -1,
      "body": it.body || ""
    }
  });

  if (section.sections){
    mappedSection.sections = section.sections.map(function(it){
      return remapSection(it)
    });
  }
  return mappedSection;
}




