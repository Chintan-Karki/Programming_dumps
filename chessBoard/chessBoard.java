import javax.swing.*;
import java.awt.*;

public class chessBoard {

JFrame frame;
JPanel squares[][] = new JPanel[8][8];

public chessBoard() {
    frame = new JFrame("Simplified Chess");
    frame.setSize(650, 650);
    frame.setLayout(new GridLayout(8, 8));

    for (int i = 0; i < 8; i++) {
        for (int j = 0; j < 8; j++) {
            squares[i][j] = new JPanel();

            if ((i + j) % 2 == 0) {
                squares[i][j].setBackground(Color.gray);
            } else {
                squares[i][j].setBackground(Color.white);
            }   
            frame.add(squares[i][j]);
        }
    }

    squares[0][0].add(new JLabel(new ImageIcon("rookblack.png")));
    squares[0][1].add(new JLabel(new ImageIcon("knightblack.png")));
    squares[0][2].add(new JLabel(new ImageIcon("bishopblack.png")));
    squares[0][3].add(new JLabel(new ImageIcon("queenblack.png")));
    squares[0][4].add(new JLabel(new ImageIcon("kingblack.png")));
    squares[0][5].add(new JLabel(new ImageIcon("bishopblack.png")));
    squares[0][6].add(new JLabel(new ImageIcon("knightblack.png")));
    squares[0][7].add(new JLabel(new ImageIcon("rookblack.png")));

    squares[7][0].add(new JLabel(new ImageIcon("rookblue.png")));
    squares[7][1].add(new JLabel(new ImageIcon("knightblue.png")));
    squares[7][2].add(new JLabel(new ImageIcon("bishopblue.png")));
    squares[7][3].add(new JLabel(new ImageIcon("queenblue.png")));
    squares[7][4].add(new JLabel(new ImageIcon("kingblue.png")));
    squares[7][5].add(new JLabel(new ImageIcon("bishopblue.png")));
    squares[7][6].add(new JLabel(new ImageIcon("knightblue.png")));
    squares[7][7].add(new JLabel(new ImageIcon("rookblue.png")));

    for (int i = 0; i < 8; i++) {
        squares[1][i].add(new JLabel(new ImageIcon("pawnblack.png")));
        squares[6][i].add(new JLabel(new ImageIcon("pawnblue.png")));
    }

    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
    frame.setLocationRelativeTo(null);
}

public static void main(String[] args) {
    new chessBoard();
}
}