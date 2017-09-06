/**
 * Created by Administrator on 2017-08-29.
 */
function sum(){
  var a = [1,2,3,4,5];
  var sum = 0;

  for (var i=0; i<a.length; i++) {
    sum += a[i];
  }
  console.log(sum);
}
sum();



function sub(){
  var a = [1,2,3,4,5];
  var sum = 0;

  for (var i=0; i<a.length; i++) {
    sum -= a[i];
  }
  console.log(sum);
}
sub();



function gob(){
  var a = [1,2,3,4,5];
  var sum = 1;

  for (var i=0; i<a.length; i++) {
    sum *= a[i];
  }
  console.log(sum);
}
gob();

