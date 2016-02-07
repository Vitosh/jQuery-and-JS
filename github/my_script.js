var gen_repo;
var gen_followers;
var gen_leaders;

window.onload = function (){
	generate_page();

	$("#clickButton").mouseover(function() {
		generate_page();
	});
};

function generate_page(){

	gen_repo = http();
	var my_input = $("#repoName").val();
	my_repo = "https://api.github.com/users/" + my_input + "/repos";
	gen_repo.open("GET", my_repo ,true);
	gen_repo.onreadystatechange = writeRepos;
	gen_repo.send (null);
	
	gen_followers = http();
	my_repo = "https://api.github.com/users/" + my_input + "/followers";
	gen_followers.open("GET", my_repo ,true);
	gen_followers.onreadystatechange = writeFollowers;
	gen_followers.send (null);
	
	gen_leaders = http();
	my_repo = "https://api.github.com/users/" + my_input + "/following";
	gen_leaders.open("GET", my_repo ,true);
	gen_leaders.onreadystatechange = writeLeaders;
	gen_leaders.send (null);	
}

function http(){
	var http;
	if (window.XMLHttpRequest){
		http = new XMLHttpRequest();
	}else{
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return http;
};

function writeLeaders(){
$('#my_leaders').empty();
if(gen_leaders.readyState == 4 && gen_leaders.status == 200){
		var result = gen_leaders.responseText;
		var obj = eval("("+result+")");				
		var ul = document.createElement("ul");
		
		for (var index in obj){					
			var element = obj[index];
			var avatar = element.avatar_url;
			var urlSite = element.html_url;
	
			$("#my_leaders").append($("<a>", 
			{
				href: urlSite, 
				html: $("<img>", { src: avatar }),
				mylogin: element.login,
			}).mouseover(function() {
				$('repoName').val($(this).attr('href'));
				$('#my_leaders_link').empty();
				$('#my_leaders_link').append($(this).attr('href')); 
				$('#repoName').val($(this).attr('mylogin'));				
			})); 
		}
	}
};

function writeFollowers(){
$('#my_followers').empty();
if(gen_followers.readyState == 4 && gen_followers.status == 200){
		var result = gen_followers.responseText;
		var obj = eval("("+result+")");				
		var ul = document.createElement("ul");
		
		for (var index in obj){					
			var element = obj[index];
			var avatar = element.avatar_url;
			var urlSite = element.html_url;
	
			$("#my_followers").append($("<a>", 
			{
				href: urlSite, 
				html: $("<img>", { src: avatar }),
				mylogin: element.login,
			}).mouseover(function() {
				$('repoName').val($(this).attr('href'));
				$('#my_followers_link').empty();
				$('#my_followers_link').append($(this).attr('href')); 
				$('#repoName').val($(this).attr('mylogin'));				
			})); 
		}
	}
};

function writeRepos(){
	$('#my_repos').empty();
	if(gen_repo.readyState == 4 && gen_repo.status == 200){
		var result = gen_repo.responseText;
		var obj = eval("("+result+")");
		var ul = document.createElement("ul");

		for (var index in obj){					
			var element = obj[index];
			var my_name = element.name;
			var my_lang = element.language;
			var li = document.createElement("li");
			var info = document.createTextNode(my_lang);
			li.appendChild(info);
			ul.appendChild(li);
			
			li = document.createElement("li");
			info = document.createTextNode("\t\t" + my_name);
			li.appendChild(info);
			ul.appendChild(li);
		}

		document.getElementById("my_repos").innerHTML = "";
		document.getElementById("my_repos").appendChild(ul);
	}
};	