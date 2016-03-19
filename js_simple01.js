arr_a = [8,10,12,1,17,29,30];

arr_b = arr_a.map(function (sqrt){
   return sqrt * sqrt;
});

arr_c = arr_b.filter(function(x,counter){
   return counter % 3 == 2; //each third
});

arr_d = arr_a.reduce(function(x,y){
   return x + y + 50;
});

arr_e = arr_a.reduce(function(x,y){
   return (x<y?x:y);
});

var simple_plan = {
   week1: 100,
   week2: 200,

   average: function() {
      this.avg = (this.week1 + this.week2) / 2;
   },

   add_one: function(){
      this.added_one = (this.avg*2+1);
      return "ALE";
   }
}


simple_plan.average();
simple_plan.add_one();

simply_print(arr_a);
simply_print(arr_b);
simply_print(arr_c);
simply_print(arr_d);
simply_print(arr_e);
simply_print(simple_plan.avg);
simply_print(simple_plan.add_one());
simply_print(simple_plan.added_one);


function simply_print(arr_k){
   document.write("<hr>");

   if (!Array.isArray(arr_k)) {
      document.write(arr_k);
      return;
   }

   for (i=0;i< arr_k.length;i++){
      document.write(arr_k[i]+"<br>");
   }
}
