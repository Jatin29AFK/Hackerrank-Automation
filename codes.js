module.exports = {
    answers:[
        `#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    
    unsigned long long int N, Sum = 0, i, Num;
    
    cin>>N;
    
    for (i = 1 ; i <= N ; i++)
        {
        cin>> Num;
        Sum += Num;
    }
    
    cout<<Sum<<endl;
       
    
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;
}`,`#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n;
    cin>>n;
    unsigned long long int sum=0,in;
    for(int i=0;i<n;i++)
        {cin>>in;
        sum+=in;}
    cout<<sum;
    return 0;
}`,`#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int N; 
    cin >> N; 
    
    int i, j; 
    
    int sumdiag1 = 0; 
    int sumdiag2 = 0; 
    for(i = 0; i < N; i++){
        for(j = 0; j< N; j++)
        {
           int no; 
           cin >> no; 
           if(i == j)
               sumdiag1 += no; 
           if(i+j == N-1)
              sumdiag2 += no; 
        }
    }
    
    cout << abs(sumdiag1 - sumdiag2);
    return 0;
}`,`#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int p=0,n=0,z=0,a,i,j;
    cin>>j;
    for(i=0;i<j;i++){
        cin>>a;
        
        if(a>0)
            p++;
        else if(a<0)
            n++;
        else
            z++;
    }
    
    printf("%.3f\n",(float)p/j);
    printf("%.3f\n",(float)n/j);
    printf("%.3f",(float)z/j);
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;
}`,`#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n;
    cin >> n;
    string str(n, ' ');
        
    for (int i = 1; i <= n; ++i) {
        str[n-i] = '#';
        cout << str << endl;
    }
    return 0;
}`
    ]
}