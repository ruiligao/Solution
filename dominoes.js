class Solution {
    public int numEquivDominoPairs(int[][] dominoes) {
        //change to 2 digital nums min*10+max/max*10+min
        //count the same nums
        //n*(n-1)/2
        if(dominoes.length<=1) return 0;
        int[] tem= new int[dominoes.length];
        for(int i=0; i<dominoes.length; i++) {
            int a = Math.min(dominoes[i][0], dominoes[i][1]);
            int b = Math.max(dominoes[i][0], dominoes[i][1]);
            tem[i] = a*10+b;
        }
        int count=0;
        Map<Integer, Integer> map = new HashMap<>();
        for(int num: tem) 
            map.put(num, map.getOrDefault(num,0)+1);
        for(Map.Entry<Integer, Integer> entry: map.entrySet()) {
            if(entry.getValue()>1) {
                count+=entry.getValue()*(entry.getValue()-1)/2;
            }
        }
       return count; 
    }
}