Array.prototype.remove_ = function(int, val){return int.filter(x => !val.includes(x))}

l = new Array()
integer_list1 =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
values_list1 = [1, 3]
console.log(l.remove_(integer_list1, values_list1), [2, 2, 4])

integer_list2 = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8]
values_list2  = [1, 3, 4, 2]
console.log(l.remove_(integer_list2, values_list2), [5, 6 ,7 ,8])

integer_list3 = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3]
values_list3  = [2, 4, 3]
console.log(l.remove_(integer_list3, values_list3), [8, 7, 6, 5, 1])

integer_list4 = [4, 4, 2 , 3]
values_list4  = [2, 2, 4, 3]
console.log(l.remove_(integer_list4, values_list4), [])

integer_list5 = []
values_list5  = [2, 2, 4, 3]
console.log(l.remove_(integer_list5, values_list5), [])
