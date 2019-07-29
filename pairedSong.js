class Solution {
    public int numPairsDivisibleBy60(int[] time) {
        if(time.length==1) return 0;
      int count =0;
        Map<Integer, Integer> map = new HashMap<>();
        for(int num: time) {
            int mod = num%60;
            int pairMod =(60-num%60)%60;
            if(map.containsKey(pairMod)){
                count+=map.get(pairMod);
            }
            map.put(mod, map.getOrDefault(mod, 0)+1);
        }
        return count;
    }
}

var numPairsDivisibleBy60 = function(time) {
    if(time.length==1) return 0;
     
     var count=0;
      for(var i=0; i<time.length; i++){
         
          for(var j=i+1; j<time.length; j++) {
              if((time[i]+time[j])%60==0) count++;
          }
      }
      return count;
  
};