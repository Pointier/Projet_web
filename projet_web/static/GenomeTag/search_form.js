
const field_entity_dic = JSON.parse(document.getElementById('mydata').textContent);




function setResult() {

    console.log(result_type.value)
    var resultElement = document.createElement('p');
    resultElement.textContent = result;

    // Get the container where you want to display the result
    var resultContainer = document.getElementById('setter');

    // Append the result element to the container
    resultContainer.value = resultElement.textContent;

    var searchForm = document.getElementById('search_form');
    // Iterate over child nodes and remove fieldsets
    for (var i = searchForm.childNodes.length - 1; i >= 0; i--) {
        var node = searchForm.childNodes[i];
        if (node.tagName === 'FIELDSET' || node.tagName === 'SELECT') {
            searchForm.removeChild(node);
        }
    }
    add_condition(false)
}

function add_condition(can_delete) {


    //var result_type = document.getElementsByName('result_type')[0];
    //var entity = result_type.options[result_type.selectedIndex].value;
    var entity = document.getElementById('setter').value;
    if ((entity in field_entity_dic) == false) {
        setResult();
        return;
    }
    else {


        var new_field = document.createElement('fieldset');
        //SUPPRESS ASAP
        new_field.style.width = '80%';
        //to put the fields next to eachother
        new_field.style.display = 'flex';
        // Create a select element
        var negation = document.createElement('select');
        negation.className = 'form-select';
        negation.style.width = '30%';
        optionsData = ["HAS", "HAS NOT"];

        for (var i = 0; i < optionsData.length; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.text = optionsData[i];
            negation.appendChild(option);
        }
        negation.selectedIndex = 0;
        negation.selectedIndex = 0;
        negation.name = "negation";

        var condition = document.createElement('select');
        condition.className = 'form-select';
        condition.style.width = '50%';
        optionsData = field_entity_dic[entity];
        // Loop through the optionsData and create option elements
        for (var i = 0; i < optionsData.length; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.text = optionsData[i];
            condition.appendChild(option);
        }
        condition.selectedIndex = 0
        condition.name = "condition";

        var value = document.createElement('input');
        value.type = "text";
        value.style.width = '100%';
        
        value.className = 'form-group';
        value.style.marginRight = '10px';
        value.name = "text_field";
        var supp = document.createElement('input');
        supp.value = " ";
        supp.type = "submit";
        supp.name = "delete";
        supp.className = 'btn-close';
        // Attach the event handler to the "x" button
        supp.addEventListener('click', function () {
            suppress_condition(this);
        });
        // Append the result element to the container

        new_field.appendChild(negation);
        new_field.innerHTML += '  ';
        new_field.appendChild(condition);
        new_field.innerHTML += '  ';


        new_field.appendChild(value)
        if (can_delete) {
            new_field.innerHTML += '  ';
            new_field.appendChild(supp)
        }

        var add_button = document.getElementById('spacing');
        var resultContainer = document.getElementById('search_form');

        if (can_delete == true) {
            var connector = document.createElement('select');
            connector.className = 'form-select';
            connector.style.width = '15%';
            optionsData = ["AND", "OR"];

            // Loop through the optionsData and create option elements
            for (var i = 0; i < optionsData.length; i++) {
                var option = document.createElement('option');
                option.value = i;
                option.text = optionsData[i];
                connector.appendChild(option);
            }
            connector.selectedIndex = 0;
            connector.name = "connector";

            resultContainer.insertBefore(connector, add_button)
        }

        resultContainer.insertBefore(new_field, add_button)
    }




}

function suppress_condition(e) {
    var previousElement = e.parentNode.previousSibling;

    // Check if the previous element exists and is an element node
    if (previousElement && previousElement.nodeType === 1) {
        // Remove the element before e.parentNode
        e.parentNode.parentNode.removeChild(previousElement);
    }

    // Remove the element referenced by e.parentNode
    e.parentNode.parentNode.removeChild(e.parentNode);
}

function do_search(event) {

    var form = document.getElementById('search_form');

    // Loop through form elements
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        // Check if the element is an input, select, or textarea
        if (element.tagName === 'TEXT' || element.tagName === 'INPUT' || element.tagName === 'SELECT') {
            console.log('Name: ' + element.name + ', Value: ' + element.value);
        }
    }

}

document.addEventListener('DOMContentLoaded', function () {
    setResult();
    /*
    document.getElementById("launch").addEventListener('click',function(event) {
        // Call the function defined in the external file
        do_search(event);
        event.preventDefault();
    });*/

    document.getElementById("add").addEventListener('click', function (event) {
        // Call the function defined in the external file
        add_condition(true);
        event.preventDefault();
    });

    document.getElementById("setter").addEventListener('click', function (event) {
        // Call the function defined in the external file
        setResult();

        //event.preventDefault();
    });
});

