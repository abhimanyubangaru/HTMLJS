#include <iostream>
#include <stdio.h>      /* printf */
#include <math.h>       /* atan */


using namespace std;

int main(){
float degree, verticalacceleration, hortizontalacceleration,  verticalvelocity, horizontalvelocity, verticalposition, horizontalposition, dt, time;
cout<<"verticalacceleration";
cin>>verticalacceleration;
cout<<"hortizontalacceleration";
cin>>hortizontalacceleration;
cout<<"verticalvelocity";
cin>>verticalvelocity;
cout<<"horizontalvelocity";
cin>>horizontalvelocity;
cout<<"verticalposition";
cin>>verticalposition;
cout<<"horizontalposition";
cin>>horizontalposition;
cout<<"dt. 1 for one second...";
cin>> dt;
time, degree = 0;

do{
  cout<<"\n" << "horizontal position: "<< horizontalposition << "\t" << "vertical position: "<< verticalposition<< "\t"<< "time: "<< time<< "\t";
  time += dt;
  horizontalposition +=  horizontalvelocity * dt;
  horizontalvelocity += hortizontalacceleration * dt;
  verticalposition += verticalvelocity * dt;
  verticalvelocity += verticalacceleration* dt;
  degree = atan(verticalvelocity/horizontalvelocity) * 180/(3.14159);






}while(verticalposition > 0);

cout<<degree;


return 0;
}
