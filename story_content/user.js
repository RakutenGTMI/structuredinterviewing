function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NbDvrOy9mQ":
        Script1();
        break;
      case "5ogqYUMnhod":
        Script2();
        break;
      case "6cp3TaSmkGV":
        Script3();
        break;
  }
}

function Script1()
{
  //To get User Name embedded into file from LMS
//SCORM has last name, first and we are switching it around to first last.
var player = GetPlayer();
// var myName  = lmsAPI.GetStudentName();
var myName  = SCORM_GetStudentName();
var array  = myName.split(',');
var newName = array[1] + ' ' + array[0]; // removed 1 extra space between ‘ ‘
player.SetVar("newName", newName);
}

function Script2()
{
  var newWin=window.open("certificate.html", "certificate", "status=0,scrollbars=0,width=1040,height=770");
}

function Script3()
{
  var m_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
var date= m_names[mm]+' '+dd+', '+yyyy;
var player = GetPlayer();
player.SetVar("DateValue",date);
}

