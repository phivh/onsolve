// Write a JavaScript function takes a string and return a new string with all vowels removed
var oRemoveVowels = {
    onInit: function() {
        this.configs = {
            strs: document.getElementById("strings"),
            submitStrs: document.getElementById("getResult"),
            result: document.getElementById("result"),
            regVowels: /[aeiouAEIOU]/g
        };
        this.onButtonClick();
    },
    // Event handler click event when user click on Go button
    onButtonClick: function () {
        var self = this;
        this.configs.submitStrs.onclick = function (event) {
            var sText = self.configs.strs.value;
            self._getStringAfterRemoveVowel(sText).then(function (data) {
                self._showResult(data);
            }, function(errorMess){
                alert(errorMess);
            });
        }
    },
    // helper to display new text after receive correct data
    _showResult: function (strings) {
        this.configs.result.children[0].innerText = strings;
    },
    // function handler
    // receving orgin string
    // return then() method contain new string after remove vewel 
    _getStringAfterRemoveVowel: function (s) { 
        return new Promise(function(resolve,reject) {
            if (s !== "") {
                var sNewText = s.replace(this.configs.regVowels, '');
                resolve(sNewText);
            } else {
                reject(new Error("Please input a valid text and click go again."));
            }
        }.bind(this));
    }
};
// Initialize
oRemoveVowels.onInit();

