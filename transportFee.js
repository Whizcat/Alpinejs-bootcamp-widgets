function transportFee(fare) {
    if (fare === "morning") {
      return "R20";
    }
    else if (fare === "afternoon") {
      return "R10";
    }
    else if (fare === "nightshift") {
      return "free";
      
    }
    
  }