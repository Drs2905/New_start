//write a program to print the multiplication table of a number N,entered by user
import java.util.*;
public class asign4_4 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=1;i<=10;i++){
            System.out.println(n*i);
        }
    }
}
