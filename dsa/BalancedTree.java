
class Node {
	int data;
	Node left, right;
	Node(int d)
	{
		data = d;
		left = right = null;
	}
}

class BalancedTree {
	Node root;

	boolean isBalanced(Node node)
	{
		int lh; 

		int rh; 
		if (node == null)
			return true;
		lh = height(node.left);
		rh = height(node.right);

		if (Math.abs(lh - rh) <= 1 && isBalanced(node.left)
			&& isBalanced(node.right))
			return true;

		return false;
	}
	int height(Node node)
	{

		if (node == null)
			return 0;

		return 1
			+ Math.max(height(node.left),
					height(node.right));
	}

	public static void main(String args[])
	{
		BalancedTree tree = new BalancedTree();
		tree.root = new Node(10);
		tree.root.left = new Node(20);
		tree.root.right = new Node(30);
		tree.root.left.left = new Node(40);
		tree.root.left.right = new Node(25);
		



		if (tree.isBalanced(tree.root))
			System.out.println("Tree is balanced");
		else
			System.out.println("Tree is not balanced");
	}
}


