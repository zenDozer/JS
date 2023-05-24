
// let ar1 = [11, 11.3, true, false, 'Vadim', [22,33], {'key1':55}]


// let r2d2 = [
//     [11,22,33],
//     ['qq','ww','ee'],
//     [['q1','w2'],['a1','s2'],[['dd1','ff2'],['tt3', 'tt4']]]
// ]
// // console.log(r2d2[2][2][0][1])

let j_son1 = {'name': 'Vadim',
              'age':33,
              'salary': 1000,
              'computers':{'comp1': 'Lenovo Legion',
                           'comp2': 'Lenovo ThinkPad',
                           'comp3': "MacBook 15' 2017" 
                        },
              'family': {'wife':{'name':'Nataliia',
                                 'age': 30,
                                 'Children':{'ch1':{'name':'Milana','age':5}}
                                }
            
                        }
}

// console.log(j_son1.age)
// console.log(j_son1.computers.comp2)
// console.log(j_son1.family.wife.Children.ch1.age)

count = 0
while (count <= 10){

    if (count == 5){
        console.log('Find = ', count)
    }

    count += 1
    console.log('Hello!!!', count)
}

// for(let i=0; i <= 10; i++){
    
//     if (i == 3){
//         for(ii in j_son1){


//             console.log('--------- Item = ', j_son1[ii], typeof j_son1[ii])

//             if (typeof j_son1[ii] == 'object'){
//                 console.log('Obj == ', j_son1[ii])
//             }

//         }
//     }
    

//     console.log('I == ', i)
// }

