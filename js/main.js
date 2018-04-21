`use strict`;


$(document).ready(function(){
    
    //1.Отправка формы
    
    $('#form-new-task').on('submit', function(e){
        
        e.preventDefault();
        
        //Принимать текст из поля с новым заданием        
        
        var taskText = $('#addNewTask').val();
        
       // console.log(taskText);
        
        
        //Генерировать новую задачу - подставить текст в разметку, и вывести на экран
        
        var $taskHolder = $('<li class="list-group-item d-flex justify-content-between task-item">');
        
        var $taskTitle = $('<span class="task-title">').text(taskText);
        
        var $taskButtons = $('<div task-item_buttons><button type="button" data-action="task-done"class="btn btn-light align-self-end green"><i class="fas fa-check"></i></button><button type="button" data-action="task-delete"class="btn btn-light align-self-end green"><i class="far fa-trash-alt"></i></button></div>');
          
        $taskHolder.append($taskTitle).append($taskButtons);
        
        $('#listOfTasks').append($taskHolder);
        
        showNotify('new'); //вызов функции
        
        toggleEmptyList();
        
        $('#addNewTask').val('');
        
    });
    
          //Отрабатывать клик по кнопке удалить, удалять текущую задачу             
        
        $('#listOfTasks').on('click', '[data-action="task-delete"]', function(e){
        
         console.log('Клик по кнопке Удалить');
        
         e.preventDefault();
        
         $(this).parents('.task-item').remove();
            
            showNotify('delete');//вызов функции
            
            toggleEmptyList();
    });
    
    
    
           //Отмечать выполнение задачи            
        
        $('#listOfTasks').on('click', '[data-action="task-done"]', function(e){
        
         console.log('Клик по кнопке Готово');
        
         e.preventDefault();
        
         $(this).parents('.task-item').find('.task-title').toggleClass('task-title--done');
            
            showNotify('done'); //вызов функции
    });
    
    
  
    
    
       //показывать нотификацию при добавлении и удалении
    
    
    function showNotify(type){
        
          var $notifyNew = $('<div class="alert alert-warning" role="alert">Задача добавлена!</div>');
    
          var $notifyDone = $('<div class="alert alert-success" role="alert"> Задача выполнена!</div>');
    
          var $notifyDelete = $('<div class="alert alert-danger" role="alert"> Задача удалена!</div>');
        
          var $notifyError = $('<div class="alert alert-danger" role="alert"> Ошибка! Нет такого действия!</div>');
        
          
        
        
             switch(type){
                 
              case 'new':
                     
                     $notifyBlock = $notifyNew;
                 
                console.log('Задача добавлена');
                     
                break;
                 
              case 'done':
                     
                    $notifyBlock = $notifyDone; 
                 
                 console.log('Задача выполнена'); 
                 
                 break;
                 
               case 'delete':
                     
                     $notifyBlock = $notifyDelete; 
                 
                  console.log('Задача удалена'); 
                 
                 break;   
                 
               default:
                     
                    $notifyBlock =  $notifyError;
                 
                 console.log('Нет такого действия');
                 
                 break;
                 
        
         } 
        
        
        
        console.log('Задача добавлена');
        
        //if($('#notifyHolder .alert')){}
        
        
        
        
                     $('#notifyHolder .alert').fadeOut();
        
                     $notifyBlock.hide();
                     
                     $('#notifyHolder').append($notifyBlock);
                     
                     $notifyBlock.fadeIn();
                     
                     setTimeout(function(){
                         
                          $notifyBlock.fadeOut();
                         
                         setTimeout(function(){
                             
                              $notifyBlock.remove();
                             
                         }, 2000);
                            
                         
                     }, 2000);
                                  
        
    }
    
    
    function toggleEmptyList(){
        
        if($('#listOfTasks').children().length > 1){
            
            console.log('HAVE TASKS');
            
            $('#emptyList').hide();
           
           }else {
               
              console.log('NO TASKS');
               
              $('#emptyList').show();  
           
           }
        
    }
    
   
    
});

    
  

