Object.assign(window.search, {"doc_urls":["automatically_deploy.html","virtualization_cpu.html#cpu虚拟化","virtual_memory.html#虚拟内存","application_layer.html#应用层","transfer_layer.html#传输层","ip_layer.html#网络层及以下","go/golang.html","rust.html","cpp11.html#右值引用","cpp11.html#lambda表达式"],"index":{"documentStore":{"docInfo":{"0":{"body":31,"breadcrumbs":2,"title":2},"1":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":0,"breadcrumbs":0,"title":0},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":4,"breadcrumbs":1,"title":1},"7":{"body":7,"breadcrumbs":1,"title":1},"8":{"body":3,"breadcrumbs":1,"title":0},"9":{"body":8,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"rt deploy: @echo \"====> building book\" mdbook build @echo \"====> deploying to github pages\" cd /Users/wwuxyu/program/wwuxyu.github.io && \\ cp -r /Users/wwuxyu/program/my-first-book/book/ ./ && \\ git add -A && \\ git commit -m \"deployed on $(shell date) by $(USER)\" && \\ git push origin main","breadcrumbs":"automatically deploy","id":"0","title":"automatically deploy"},"1":{"body":"","breadcrumbs":"CPU虚拟化：进程、线程和协程 » CPU虚拟化","id":"1","title":"CPU虚拟化"},"2":{"body":"","breadcrumbs":"虚拟内存 » 虚拟内存","id":"2","title":"虚拟内存"},"3":{"body":"","breadcrumbs":"应用层 » 应用层","id":"3","title":"应用层"},"4":{"body":"","breadcrumbs":"传输层 » 传输层","id":"4","title":"传输层"},"5":{"body":"","breadcrumbs":"网络层及以下 » 网络层及以下","id":"5","title":"网络层及以下"},"6":{"body":"golang learn detial MyGoNote","breadcrumbs":"Go","id":"6","title":"Go"},"7":{"body":"some learning materials Rust语言圣经(Rust Course) https://course.rs Rust语言中文社区 https://rustcc.cn","breadcrumbs":"Rust","id":"7","title":"Rust"},"8":{"body":"c++0x C++11新特性 初始化列表 右值引用、移动语义和完美转发。 左值：可以取地址 右值：不可以取地址。将亡值和纯右值。 右值引用就是对一个右值进行引用的类型。 移动语义 对于一个包含指针成员变量的类，由于编译器默认的拷贝构造函数都是浅拷贝，所以我们一般需要通过实现深拷贝的拷贝构造函数，为指针成员分配新的内存并进行内容拷贝，从而避免悬挂指针的问题。 调用两次拷贝构造函数，第一次是生成get()函数返回时的临时变量，第二次是将该返回值赋值给变量a。与此对应要掉用三次析构函数来释放内存。 移动构造函数具体实现就是接收一个右值引用作为参数，使用右值引用的参数初始化气指针成员变量。 省去复制。 完美转发 完美转发是指在函数模版中，完全依照模版的参数类型，将参数传递给函数模版中调用的另一个函数，即传入转发函数的是左值对象。 引用折叠。","breadcrumbs":"Cpp11 » 右值引用","id":"8","title":"右值引用"},"9":{"body":"Lambda表达式定义一个匿名函数，并且可以捕获一定范围内的变量，其定义如下 [捕捉列表](参数)mutable—>返回值类型{ 函数体 } [捕捉列表]：该列表总是出现在lambda表达式的起始位置，编译器根据[]来判断接下来的代码是否为lambda表达式，捕捉列表能够捕捉当前作用域中的变量，供lambda函数使用。 [val]：表示以传值方式捕捉变量val [=]：表示以传值方式捕捉当前作用域中的变量，包括this指针。 [&val]：表示以引用方式传递捕捉变量val。 [&]：表示以引用方式传递捕捉当前作用域中的所有变量，包括this指针。 [this]：表示以传值方式捕捉当前的this指针。 (参数)：参数列表。与普通函数参数列表使用相同。如果不需要传递参数，可以连同\"()\"一起省略。 mutable：默认情况下，lambda函数总是一个const函数，捕捉的传值参数具有常性，mutable可以取消常性。使用mutable修饰符时，参数列表不能省略，即使参数为空。 —>返回值类型：返回值类型。使用追踪返回类型形式声明函数的返回值类型，没有返回值此部分可省略。返回值类型明确的情况下，也可省略，由编译器推导。 {函数体}：在函数体内除了可以使用参数外，还能使用捕捉的变量。 注意：在lambda表达式中，参数列表和返回值类型都可省略，而捕捉列表和函数体可以为空。所以最简单的lambda表达式为：[]{}，该表达式不能做任何事。","breadcrumbs":"Cpp11 » Lambda表达式","id":"9","title":"Lambda表达式"}},"length":10,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"d":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"/":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"+":{"+":{"0":{"df":0,"docs":{},"x":{"df":1,"docs":{"8":{"tf":1.0}}}},"1":{"1":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}},"d":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":2.0}}}}}},"t":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"(":{")":{"df":0,"docs":{},"函":{"df":0,"docs":{},"数":{"df":0,"docs":{},"返":{"df":0,"docs":{},"回":{"df":0,"docs":{},"时":{"df":0,"docs":{},"的":{"df":0,"docs":{},"临":{"df":0,"docs":{},"时":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"df":0,"docs":{},"，":{"df":0,"docs":{},"第":{"df":0,"docs":{},"二":{"df":0,"docs":{},"次":{"df":0,"docs":{},"是":{"df":0,"docs":{},"将":{"df":0,"docs":{},"该":{"df":0,"docs":{},"返":{"df":0,"docs":{},"回":{"df":0,"docs":{},"值":{"df":0,"docs":{},"赋":{"df":0,"docs":{},"值":{"df":0,"docs":{},"给":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"o":{"df":1,"docs":{"6":{"tf":1.0}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"c":{"c":{".":{"c":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":1,"docs":{"9":{"tf":1.4142135623730951}},"表":{"df":0,"docs":{},"达":{"df":0,"docs":{},"式":{"df":0,"docs":{},"中":{"df":0,"docs":{},"，":{"df":0,"docs":{},"参":{"df":0,"docs":{},"数":{"df":0,"docs":{},"列":{"df":0,"docs":{},"表":{"df":0,"docs":{},"和":{"df":0,"docs":{},"返":{"df":0,"docs":{},"回":{"df":0,"docs":{},"值":{"df":0,"docs":{},"类":{"df":0,"docs":{},"型":{"df":0,"docs":{},"都":{"df":0,"docs":{},"可":{"df":0,"docs":{},"省":{"df":0,"docs":{},"略":{"df":0,"docs":{},"，":{"df":0,"docs":{},"而":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"列":{"df":0,"docs":{},"表":{"df":0,"docs":{},"和":{"df":0,"docs":{},"函":{"df":0,"docs":{},"数":{"df":0,"docs":{},"体":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"为":{"df":0,"docs":{},"空":{"df":0,"docs":{},"。":{"df":0,"docs":{},"所":{"df":0,"docs":{},"以":{"df":0,"docs":{},"最":{"df":0,"docs":{},"简":{"df":0,"docs":{},"单":{"df":0,"docs":{},"的":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"的":{"df":0,"docs":{},"起":{"df":0,"docs":{},"始":{"df":0,"docs":{},"位":{"df":0,"docs":{},"置":{"df":0,"docs":{},"，":{"df":0,"docs":{},"编":{"df":0,"docs":{},"译":{"df":0,"docs":{},"器":{"df":0,"docs":{},"根":{"df":0,"docs":{},"据":{"[":{"]":{"df":0,"docs":{},"来":{"df":0,"docs":{},"判":{"df":0,"docs":{},"断":{"df":0,"docs":{},"接":{"df":0,"docs":{},"下":{"df":0,"docs":{},"来":{"df":0,"docs":{},"的":{"df":0,"docs":{},"代":{"df":0,"docs":{},"码":{"df":0,"docs":{},"是":{"df":0,"docs":{},"否":{"df":0,"docs":{},"为":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":0,"docs":{},"表":{"df":0,"docs":{},"达":{"df":0,"docs":{},"式":{"df":0,"docs":{},"，":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"列":{"df":0,"docs":{},"表":{"df":0,"docs":{},"能":{"df":0,"docs":{},"够":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"当":{"df":0,"docs":{},"前":{"df":0,"docs":{},"作":{"df":0,"docs":{},"用":{"df":0,"docs":{},"域":{"df":0,"docs":{},"中":{"df":0,"docs":{},"的":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"df":0,"docs":{},"，":{"df":0,"docs":{},"供":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}},"u":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}},"e":{"df":0,"docs":{},"：":{"df":0,"docs":{},"默":{"df":0,"docs":{},"认":{"df":0,"docs":{},"情":{"df":0,"docs":{},"况":{"df":0,"docs":{},"下":{"df":0,"docs":{},"，":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":0,"docs":{},"函":{"df":0,"docs":{},"数":{"df":0,"docs":{},"总":{"df":0,"docs":{},"是":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"函":{"df":0,"docs":{},"数":{"df":0,"docs":{},"，":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"的":{"df":0,"docs":{},"传":{"df":0,"docs":{},"值":{"df":0,"docs":{},"参":{"df":0,"docs":{},"数":{"df":0,"docs":{},"具":{"df":0,"docs":{},"有":{"df":0,"docs":{},"常":{"df":0,"docs":{},"性":{"df":0,"docs":{},"，":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"取":{"df":0,"docs":{},"消":{"df":0,"docs":{},"常":{"df":0,"docs":{},"性":{"df":0,"docs":{},"。":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":1,"docs":{"0":{"tf":1.0}},"t":{"df":1,"docs":{"0":{"tf":1.0}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.4142135623730951}},"语":{"df":0,"docs":{},"言":{"df":0,"docs":{},"圣":{"df":0,"docs":{},"经":{"(":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}}},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"]":{"df":0,"docs":{},"：":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"以":{"df":0,"docs":{},"传":{"df":0,"docs":{},"值":{"df":0,"docs":{},"方":{"df":0,"docs":{},"式":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"当":{"df":0,"docs":{},"前":{"df":0,"docs":{},"的":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"s":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"w":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"u":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"w":{"df":0,"docs":{},"w":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"u":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"]":{"df":0,"docs":{},"：":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"以":{"df":0,"docs":{},"传":{"df":0,"docs":{},"值":{"df":0,"docs":{},"方":{"df":0,"docs":{},"式":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}},"引":{"df":0,"docs":{},"用":{"df":0,"docs":{},"方":{"df":0,"docs":{},"式":{"df":0,"docs":{},"传":{"df":0,"docs":{},"递":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"a":{"d":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"/":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"c":{"+":{"+":{"0":{"df":0,"docs":{},"x":{"df":1,"docs":{"8":{"tf":1.0}}}},"1":{"1":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"p":{"df":1,"docs":{"0":{"tf":1.0}},"p":{"1":{"1":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"u":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}},"d":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":2.23606797749979}}}}}},"t":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"(":{")":{"df":0,"docs":{},"函":{"df":0,"docs":{},"数":{"df":0,"docs":{},"返":{"df":0,"docs":{},"回":{"df":0,"docs":{},"时":{"df":0,"docs":{},"的":{"df":0,"docs":{},"临":{"df":0,"docs":{},"时":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"df":0,"docs":{},"，":{"df":0,"docs":{},"第":{"df":0,"docs":{},"二":{"df":0,"docs":{},"次":{"df":0,"docs":{},"是":{"df":0,"docs":{},"将":{"df":0,"docs":{},"该":{"df":0,"docs":{},"返":{"df":0,"docs":{},"回":{"df":0,"docs":{},"值":{"df":0,"docs":{},"赋":{"df":0,"docs":{},"值":{"df":0,"docs":{},"给":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"a":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"o":{"df":1,"docs":{"6":{"tf":1.4142135623730951}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"c":{"c":{".":{"c":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":1,"docs":{"9":{"tf":1.7320508075688772}},"表":{"df":0,"docs":{},"达":{"df":0,"docs":{},"式":{"df":0,"docs":{},"中":{"df":0,"docs":{},"，":{"df":0,"docs":{},"参":{"df":0,"docs":{},"数":{"df":0,"docs":{},"列":{"df":0,"docs":{},"表":{"df":0,"docs":{},"和":{"df":0,"docs":{},"返":{"df":0,"docs":{},"回":{"df":0,"docs":{},"值":{"df":0,"docs":{},"类":{"df":0,"docs":{},"型":{"df":0,"docs":{},"都":{"df":0,"docs":{},"可":{"df":0,"docs":{},"省":{"df":0,"docs":{},"略":{"df":0,"docs":{},"，":{"df":0,"docs":{},"而":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"列":{"df":0,"docs":{},"表":{"df":0,"docs":{},"和":{"df":0,"docs":{},"函":{"df":0,"docs":{},"数":{"df":0,"docs":{},"体":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"为":{"df":0,"docs":{},"空":{"df":0,"docs":{},"。":{"df":0,"docs":{},"所":{"df":0,"docs":{},"以":{"df":0,"docs":{},"最":{"df":0,"docs":{},"简":{"df":0,"docs":{},"单":{"df":0,"docs":{},"的":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"的":{"df":0,"docs":{},"起":{"df":0,"docs":{},"始":{"df":0,"docs":{},"位":{"df":0,"docs":{},"置":{"df":0,"docs":{},"，":{"df":0,"docs":{},"编":{"df":0,"docs":{},"译":{"df":0,"docs":{},"器":{"df":0,"docs":{},"根":{"df":0,"docs":{},"据":{"[":{"]":{"df":0,"docs":{},"来":{"df":0,"docs":{},"判":{"df":0,"docs":{},"断":{"df":0,"docs":{},"接":{"df":0,"docs":{},"下":{"df":0,"docs":{},"来":{"df":0,"docs":{},"的":{"df":0,"docs":{},"代":{"df":0,"docs":{},"码":{"df":0,"docs":{},"是":{"df":0,"docs":{},"否":{"df":0,"docs":{},"为":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":0,"docs":{},"表":{"df":0,"docs":{},"达":{"df":0,"docs":{},"式":{"df":0,"docs":{},"，":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"列":{"df":0,"docs":{},"表":{"df":0,"docs":{},"能":{"df":0,"docs":{},"够":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"当":{"df":0,"docs":{},"前":{"df":0,"docs":{},"作":{"df":0,"docs":{},"用":{"df":0,"docs":{},"域":{"df":0,"docs":{},"中":{"df":0,"docs":{},"的":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"df":0,"docs":{},"，":{"df":0,"docs":{},"供":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}},"u":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}},"e":{"df":0,"docs":{},"：":{"df":0,"docs":{},"默":{"df":0,"docs":{},"认":{"df":0,"docs":{},"情":{"df":0,"docs":{},"况":{"df":0,"docs":{},"下":{"df":0,"docs":{},"，":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":0,"docs":{},"函":{"df":0,"docs":{},"数":{"df":0,"docs":{},"总":{"df":0,"docs":{},"是":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"函":{"df":0,"docs":{},"数":{"df":0,"docs":{},"，":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"的":{"df":0,"docs":{},"传":{"df":0,"docs":{},"值":{"df":0,"docs":{},"参":{"df":0,"docs":{},"数":{"df":0,"docs":{},"具":{"df":0,"docs":{},"有":{"df":0,"docs":{},"常":{"df":0,"docs":{},"性":{"df":0,"docs":{},"，":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"可":{"df":0,"docs":{},"以":{"df":0,"docs":{},"取":{"df":0,"docs":{},"消":{"df":0,"docs":{},"常":{"df":0,"docs":{},"性":{"df":0,"docs":{},"。":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":1,"docs":{"0":{"tf":1.0}},"t":{"df":1,"docs":{"0":{"tf":1.0}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.7320508075688772}},"语":{"df":0,"docs":{},"言":{"df":0,"docs":{},"圣":{"df":0,"docs":{},"经":{"(":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}}},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"]":{"df":0,"docs":{},"：":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"以":{"df":0,"docs":{},"传":{"df":0,"docs":{},"值":{"df":0,"docs":{},"方":{"df":0,"docs":{},"式":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"当":{"df":0,"docs":{},"前":{"df":0,"docs":{},"的":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"s":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"w":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"u":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"w":{"df":0,"docs":{},"w":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"y":{"df":0,"docs":{},"u":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"]":{"df":0,"docs":{},"：":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"以":{"df":0,"docs":{},"传":{"df":0,"docs":{},"值":{"df":0,"docs":{},"方":{"df":0,"docs":{},"式":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}},"引":{"df":0,"docs":{},"用":{"df":0,"docs":{},"方":{"df":0,"docs":{},"式":{"df":0,"docs":{},"传":{"df":0,"docs":{},"递":{"df":0,"docs":{},"捕":{"df":0,"docs":{},"捉":{"df":0,"docs":{},"变":{"df":0,"docs":{},"量":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"title":{"root":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"c":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}},"l":{"a":{"df":0,"docs":{},"m":{"b":{"d":{"a":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});