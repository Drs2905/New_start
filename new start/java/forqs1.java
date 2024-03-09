//print reverse of a number
public class forqs1 {
    public static void main(String[] args) {
        int n=10899;
        while(n>0){
            int a=n%10;
            System.out.print(a+ "");
              n=n/10;
        }
        System.out.println();
    }
}
