class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
         if(p==null && q==null) return true;
        if(p==null || q==null) return false;
        if(p.val!=q.val) return false;
        boolean left= isSameTree(p.left, q.left);
        boolean right=isSameTree(p.right, q.right);
        return (left && right);    
    }
}

class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs==null ||strs.length ==0) return "";
        for(int i=0; i<strs[0].length(); i++) {
            char c=strs[0].charAt(i);
            for(int j=1; j<strs.length; j++) {
                if(strs[j].length()==i ||strs[j].charAt(i) !=c)
                    return strs[0].substring(0,i);
            }
        }
     return strs[0]; 
    }
}