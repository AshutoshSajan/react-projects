import React, {Component}from 'react';

class Table extends Component {
	render(){
		return(
			<div>
				<section className="table-sec container">
					<table className="table">
						<caption className="secondary-clr">table</caption>
						<tr>
							<th>site</th>
							<th>views</th>
							<th>clicks</th>
							<th>average</th>
						</tr>
						<tr>
							<td colspan="">google</td>
							<td colspan="">9518</td>
							<td colspan="">6369</td>
							<td colspan="">01:32:50</td>
						</tr>
						<tr>
							<td>twitter</td>
							<td>7632</td>
							<td>12345</td>
							<td>00:65:65</td>
						</tr>
						<tr>
							<td>amazon</td>
							<td>5748</td>
							<td>13425</td>
							<td>00:24:54</td>
						</tr>
						<tr>							
							<td>linkedin</td>
							<td>3645</td>
							<td>8736</td>
							<td>00:24:58</td>
						</tr>
						<tr>							
							<td>codePen</td>
							<td>2033</td>
							<td>87653</td>
							<td>00:42:67</td>
						</tr>
						<tr>							
							<td>gitHub</td>
							<td>5734</td>
							<td>9873</td>
							<td>00:34:79</td>
						</tr>						
					</table>
				</section>
			</div>
		);
	}
}

export default Table;