var calculate=function(data,steak,meatType){

var myheatsolver = HeatSolver(steak);
var Thedata=myheatsolver.sixty_graph_arrays_duration(data);

var sampledata=Thedata.temps;
var flame=Thedata.points;
var timestep=1/Thedata.step;

graphSteak(sampledata,flame,timestep,meatType);
	
}