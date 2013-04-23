// jQuery Random function 1.0
﻿jQuery.Random = function(m,n)
{
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}
