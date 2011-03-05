// Testing the translation library 
describe("Translation Library", function() {

  it("should be able to detect English", function() {
    var returnValue = -1;

    translette.translation.detectLanguage("This text is in English.",
        function(language) {
          returnValue = language;
        });
    
    waitsFor(function() { return returnValue != -1; },
        "The language of the source text was never returned", 10000);

    runs(function() {
      expect(returnValue).toEqual('en');
    });
  });
  
  it("should be able to detect Russian", function() {
    var returnValue = -1;

    translette.translation.detectLanguage(
        // "Я люблю собак."
        "\u042F\u0020\u043B\u044E\u0431\u043B\u044E\u0020\u0441\u043E\u0431\u0430\u043A\u002E",
        function(language) {
          returnValue = language;
        });
    
    waitsFor(function() { return returnValue != -1; },
        "The language of the source text was never returned", 10000);

    runs(function() {
      expect(returnValue).toEqual('ru');
    });
  });

});