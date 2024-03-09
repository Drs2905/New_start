//write a program that reads a set of integers and then prints the sum of the even and odd integers
import java.util.*;
public class asign4_3 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
            int num;
            int fact=1;
            System.out.println("Enter any positive integer:");
            num =sc.nextInt();
            for(int i=1;i<=num;i++){
                fact*=i;
            }
            System.out.println("Factorial is : "+fact);
    }
 

}
