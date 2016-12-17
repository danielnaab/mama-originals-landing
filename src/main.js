"use strict";

var document = require('global/document'),
    elementClass = require('element-class'),
    jsonp = require('jsonp'),
    serialize = require('form-serialize'),
    window = require('global/window')


window.register = function (form) {
    jsonp('//mindovermatter4me.us2.list-manage.com/subscribe/post-json?u=da994cb2585ad57233c811577&id=7335a5881a&' + serialize(form), {
        param: 'c'
    }, function (err, response) {
        var node = document.getElementById('form-msg')
        if (err || response.result === 'error') {
            node.innerHTML = (
                response && response.msg ?
                            response.msg :
                            'There was an error registering your email address.'
                )
            elementClass(node).add('error')
        }
        else {
            node.innerHTML = response.msg
            elementClass(node).remove('error')
            var emailNode = document.getElementById('mce-EMAIL')
            emailNode.blur()
            emailNode.value = ''
        }
        elementClass(node).remove('hidden')
    })
    return false
}
