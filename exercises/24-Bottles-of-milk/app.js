function song() {
    for (i=99; i>=0; i--){
      var nums = i;
      switch (nums) {
    case 2:
      text = i + " bottles of milk on the wall, " + i + " bottles of milk.\nTake one down and pass it around, " + (i-1) + " bottle of milk on the wall.\n\r";
      break;
    case 1:
      text = i + " bottle of milk on the wall, " + i + " bottle of milk.\nTake one down and pass it around, no more bottles of milk on the wall.\n\r";
      break;
    case 0:
      text = "No more bottles of milk on the wall, no more bottles of milk.\nGo to the store and buy some more, 99 bottles of milk on the wall.\n\r";
      break;
    default:
      text = i + " bottles of milk on the wall, " + i + " bottles of milk.\nTake one down and pass it around, " + (i-1) + " bottles of milk on the wall.\n\r";
  }
      
      
      console.log(text);
    }
  }
  
  song();
  
  