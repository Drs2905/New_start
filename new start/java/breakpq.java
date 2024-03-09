//keep entering numbers till user enters a multiple of 10.
import java.util.*;
public class breakpq {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        do{
            int n=sc.nextInt();
            if(n%10==0){
                break;
            }
            System.out.println(n);
        }while(true);
    }
}
