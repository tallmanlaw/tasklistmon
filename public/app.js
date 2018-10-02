$(function() {
  $('#more').on('click', function(event) {
    event.preventDefault();
    console.log("submit is working");
    const task = {
      ListName: $('#new-task').val().trim()
    };
    console.log(task, "this is the task");

    $.post('/add/List', task, function(res){
       getAll();
    });
    $('#new-task').val('');
    $('#new-task').focus();

  });
  
})

function listRender(newList) {
   $('#content').empty();
  newList.forEach((e, index)=>{
    console.log(e + "   " + index);
    const listTag = $('<li>');
    const checkedbox = $('<input type="checkbox"/>');
    
    const button = $('<i type="submit" id="delete" class="fas fa-times"></i>');
    button.addClass('delete');
    button.attr('data-id', e._id);
    
    listTag.append(checkedbox);
    listTag.append(e.ListName);
    listTag.append(button);

    _addEventListener(button);
    $('#content').append(listTag);
    
  })

  

}

function getAll() {
  $.get('/List', function(data){
    
      listRender(data);
  });
}

function _addEventListener(button){
console.log(button);
 let parent = $(button).parent();
 console.log(parent);
 let text = $(parent).text();
 console.log(text);
  $(button).on('click', function(){
    let id = $(this).attr('data-id');
     let deleteThis = {
        id: id
      }
      console.log(deleteThis);
    
     $.post('/delete/List', deleteThis, function(data){
      
       getAll();
        // listRender(data);
     });
  });

}