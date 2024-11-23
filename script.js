function indexOfIgnoreCase(s1, s2) {

  let l1=s1.length;
  let l2=s2.length;

	if(l1<l2)
	{
		return -1;
	}
	let ans=-1;
	let flag=0;

  for(let i=0;i<l1;)
	  {
		  if(s1.charAt(i).toUpperCase()===s2.charAt(0).toUpperCase())
		  {
			  let j=0;
			  let p=i;
			  while(i<l1 && j<l2 && s1.charAt(i).toUpperCase()===s2.charAt(j).toUpperCase())
				  {
					  i++;
					  j++;
				  }	 
			  if(j===l2)
			  {
				  ans=p;
				  break;
			  }
		  }
		  else
		  {
			  i++;
		  }
	  }
	return ans;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
