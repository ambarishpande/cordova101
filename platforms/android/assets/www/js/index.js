var localStorage =  window.localStorage;
var content = document.getElementById('content'); 
//localStorage.setItem("persons",JSON.stringify([]));
document.getElementById("submit").addEventListener("click",add);
document.getElementById("delete").addEventListener("click",deleteAll);
document.getElementById("show").addEventListener("click",show);



function add(){

    if (!localStorage.getItem('persons')) {
        localStorage.setItem("persons",JSON.stringify([]));
    }else{

    persons = JSON.parse(localStorage.getItem('persons'));
    length = persons.length;
    var name = document.getElementById('name').value;
    if (name == "") {
        Materialize.toast("Please Input Name",2000);
    }else{
        document.getElementById('name').value = "";
    
        person = {
            'id' : length+1,
            'name' : name
        };
        persons.push(person);
        localStorage.setItem('persons',JSON.stringify(persons));
        persons = JSON.parse(localStorage.getItem('persons'));
        content.innerHTML = display();
        Materialize.toast(name +" Added Successfully",4000);
    
    }
  

      }

    
}

function deleteAll(){
    localStorage.removeItem('persons');
    content.innerHTML = "";
    Materialize.toast("All Entries Deleted",2000);
    localStorage.hits = 0;
}

function show(){
    content.innerHTML = display();
}

function display(){
     item = "<ul class='collection'>";
     
     if (!localStorage.getItem('persons')) {
        Materialize.toast("No DB Created",2000);
        return "Nothing to display";
     }else{
      persons = JSON.parse(localStorage.getItem('persons'));
       
      if (persons.length == 0) {
          return "Empty Database";
      }else{
          for(var i = 0 ; i<persons.length;i++){
              item += "<li class='collection-item'>" + persons[i].id + '  ' + persons[i].name  + "</li>";  
          }
          item+="</ul>";
          return item;    
      } 
     }
     
    
}

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown(e) {
   e.preventDefault();
   alert('Back Button is Pressed!');
}

var app = {
    // Application Constructor
    initialize: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },

    onDeviceReady: function() {
      //  controller = new Controller();
        // We will init / bootstrap our application here


        document.getElementById("cameraTakePicture").addEventListener
         ("click", cameraTakePicture);    
         document.addEventListener('deviceReady',ready,false);
        document.addEventListener('pause',pause,false);
        document.addEventListener('backbutton',backPress,false);
        document.addEventListener('volumeupbutton',volUp,false);
        document.addEventListener('volumedownbutton',volDown,false);

     },
};
app.initialize();

function cameraTakePicture() {
   navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI
   });

   function onSuccess(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
   }

   function onFail(message) {
      alert('Failed because: ' + message);
   }
}

    function ready(){Materialize.toast("Device Ready",2000);}
        function pause(){Materialize.toast("Pause",2000);}
        function backPress(e){
            e.preventDefault();
            Materialize.toast("Pause",2000);
        }
        function volUp(){Materialize.toast("Volume Up",2000);}
        function volDown(){Materialize.toast("Volume Down",2000);}
   


// // Detecting Device events

