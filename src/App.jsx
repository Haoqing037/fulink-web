import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import './App.css'
import './navbar.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Feature({ icon, title, desc }) {
  return (
    <div className="feature-item">
      <span className="feature-icon">{icon}</span>
      <div className="feature-title">{title}</div>
      <div className="feature-desc">{desc}</div>
    </div>
  )
}

function FooterInfo() {
  return (
    <footer className="footer-info">
      <div className="footer-sections">
        <div className="footer-col">
          <h3>常见问题</h3>
          <ul>
            <li>Q: 如何选择套餐？<br/>A: 根据流量和使用时长选择适合自己的方案。</li>
            <li>Q: 支持哪些支付方式？<br/>A: 支持银联、Visa、MasterCard等主流银行卡。</li>
            <li>Q: 如何联系客服？<br/>A: 可通过微信、小红书或邮箱联系我们。</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>联系我们</h3>
          <ul>
            <li>电话：+1 415-993-7046</li>
            <li>邮箱：support@fulink.com</li>
            <li>微信客服：fulink_us</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>企业介绍</h3>
          <p>Fulink 致力于为中国赴美留学生和华人提供高性价比、全托管的美国电话卡服务。我们是多家美国主流运营商的授权代理，服务覆盖全美。</p>
        </div>
        <div className="footer-col">
          <h3>订阅最新资讯</h3>
          <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="请输入邮箱" required />
            <button type="submit">提交</button>
          </form>
        </div>
      </div>
      <div className="footer-copyright">
        ©2025 Fulink. All rights reserved.
      </div>
    </footer>
  )
}

function Home() {
  const [hovered, setHovered] = useState(null)
  return (
    <div className="page home-page">
      {/* Banner 区块 */}
      <section className="banner">
        <h1>美国留学电话卡 · 全托管无忧</h1>
        <p>中美两地包邮寄送 · 自动扣费 · 全中文服务</p>
        <a className="cta" href="/plans">立即查看套餐</a>
      </section>
      {/* 主打套餐推荐 */}
      <section className="home-plans">
        <h2>热销套餐推荐</h2>
        <div className="price-table">
          <div
            className={`plan-card${hovered === 0 ? ' plan-card--highlight' : ''}`}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>$40 方案</h3>
            <ul>
              <li><b>上网流量：</b>吃到饱</li>
              <li><b>热点分享：</b>可热点分享 5GB 流量</li>
              <li><b>通话：</b>美国本地门号，市话及手机无限畅打，短信无限</li>
              <li><b>方案时间：</b>88天</li>
            </ul>
            <a className="plan-buy" href="/checkout">立即购买</a>
          </div>
          <div
            className={`plan-card${hovered === 1 ? ' plan-card--highlight' : ''}`}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>$50 方案</h3>
            <ul>
              <li><b>上网流量：</b>吃到饱</li>
              <li><b>热点分享：</b>可热点分享 25GB 流量</li>
              <li><b>通话：</b>美国本地门号，市话及手机无限畅打，短信无限</li>
              <li><b>方案时间：</b>88天</li>
            </ul>
            <a className="plan-buy" href="/checkout">立即购买</a>
          </div>
        </div>
      </section>
      {/* 服务场景介绍 */}
      <section className="scenarios">
        <h2>适用场景</h2>
        <div className="scenarios-list">
          <div className="scenario-item">留学赴美</div>
          <div className="scenario-item">短期交换/访学</div>
          <div className="scenario-item">旅游/探亲</div>
          <div className="scenario-item">短期工作/实习</div>
        </div>
      </section>
      {/* 产品特色区块 */}
      <section className="features">
        <h2>我们的特色</h2>
        <div className="features-list">
          <Feature icon="📃" title="无合同" desc="价格透明，无隐藏费用" />
          <Feature icon="🌐" title="全美覆盖" desc="Verizon网络，5G-LTE高速流量" />
          <Feature icon="🚚" title="中美包邮" desc="3-5个工作日，寄至收货地址" />
          <Feature icon="💳" title="自动付款" desc="支持主流信用卡，每月自动扣费" />
          <Feature icon="🗣️" title="全中文客服" desc="微信、小红书等多渠道支持" />
        </div>
      </section>
      {/* 底部信息区块 */}
      <FooterInfo />
    </div>
  )
}

function Plans() {
  const [hovered, setHovered] = useState(null)
  return (
    <div className="page plans-page">
      <h2>套餐详情</h2>
      <p className="plans-desc">所有套餐均为Verizon网络，支持中美两地收货，自动扣费，全中文客服。</p>
      <div className="price-table">
        <div
          className={`plan-card${hovered === 0 ? ' plan-card--highlight' : ''}`}
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
        >
          <h3>$40 方案</h3>
          <ul>
            <li><b>上网流量：</b>吃到饱</li>
            <li><b>热点分享：</b>可热点分享 5GB 流量</li>
            <li><b>通话：</b>美国本地门号，市话及手机无限畅打，短信无限</li>
            <li><b>方案时间：</b>88天（按指定日期开通，最后一天美东时间23:59断线）</li>
            <li><b>其他：</b>加拿大及墨西哥每天2GB后降速128kbps</li>
          </ul>
          <a className="plan-buy" href="/checkout">立即购买</a>
        </div>
        <div
          className={`plan-card${hovered === 1 ? ' plan-card--highlight' : ''}`}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
        >
          <h3>$50 方案</h3>
          <ul>
            <li><b>上网流量：</b>吃到饱</li>
            <li><b>热点分享：</b>可热点分享 25GB 流量</li>
            <li><b>通话：</b>美国本地门号，市话及手机无限畅打，短信无限</li>
            <li><b>方案时间：</b>88天（按指定日期开通，最后一天美东时间23:59断线）</li>
            <li><b>其他：</b>加拿大及墨西哥每天2GB后降速128kbps</li>
          </ul>
          <a className="plan-buy" href="/checkout">立即购买</a>
        </div>
      </div>
      <div className="plans-tips">
        <p>* 请根据实际需求选择套餐，套餐一经开通不可更改。</p>
        <p>* 现有用户如需切换套餐，请联系客服。</p>
      </div>
    </div>
  )
}

// Luhn算法IMEI校验
function isValidIMEI(imei) {
  if (!/^\d{15}$/.test(imei)) return false;
  let sum = 0;
  for (let i = 0; i < 15; i++) {
    let num = parseInt(imei.charAt(i), 10);
    if (i % 2 === 1) {
      num *= 2;
      if (num > 9) num -= 9;
    }
    sum += num;
  }
  return sum % 10 === 0;
}

function StepCheckout() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    userType: 'new',
    school: '',
    isStudent: true,
    usZip: '',
    imei: '',
    schoolType: 'school',
    customSchool: '',
    plan: '40',
    extraService: false,
    coupon: '',
    delivery: 'express',
    country: 'U.S.A',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    serviceStartDate: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [univList, setUnivList] = useState([])
  const [schoolSuggestions, setSchoolSuggestions] = useState([])

  useEffect(() => {
    fetch('/src/assets/us_universities.json')
      .then(res => res.json())
      .then(data => setUnivList(data))
  }, [])

  function handleSchoolInput(e) {
    const value = e.target.value
    setForm(f => ({ ...f, customSchool: value }))
    if (value.length > 0) {
      const suggestions = univList.filter(u => u.toLowerCase().includes(value.toLowerCase())).slice(0, 8)
      setSchoolSuggestions(suggestions)
    } else {
      setSchoolSuggestions([])
    }
  }
  function selectSchool(school) {
    setForm(f => ({ ...f, customSchool: school }))
    setSchoolSuggestions([])
  }

  // 步骤校验
  function validateStep() {
    const errs = {}
    if (step === 0) {
      // 新购卡和携号转网都不强制填学校
    }
    if (step === 1) {
      if (!form.usZip) errs.usZip = '必填'
      if (!isValidIMEI(form.imei)) errs.imei = '请输入有效的15位IMEI'
    }
    if (step === 2) {
      // 购物车无需必填
    }
    if (step === 3) {
      if (!form.country) errs.country = '必填'
      if (!form.address1) errs.address1 = '必填'
      if (!form.city) errs.city = '必填'
      if (!form.state) errs.state = '必填'
      if (!/^\d{5}$/.test(form.zipcode)) errs.zipcode = '请输入5位邮编'
      if (!form.serviceStartDate) errs.serviceStartDate = '必填'
    }
    if (step === 4) {
      if (!/^\d{16}$/.test(form.cardNumber)) errs.cardNumber = '请输入16位银行卡号'
      if (!/^\d{2}\/\d{2}$/.test(form.expiry)) errs.expiry = '格式如MM/YY'
      if (!/^\d{3}$/.test(form.cvc)) errs.cvc = '请输入3位CVC'
    }
    return errs
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function nextStep(e) {
    e.preventDefault()
    const errs = validateStep()
    setErrors(errs)
    if (Object.keys(errs).length === 0) setStep(s => s + 1)
  }
  function prevStep(e) {
    e.preventDefault()
    setErrors({})
    setStep(s => s - 1)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const errs = validateStep()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setTimeout(() => {
        navigate('/order-success')
      }, 1200)
    }
  }

  if (submitted) {
    return <div className="checkout-success">支付成功，正在跳转...</div>
  }

  return (
    <div className="page checkout-page">
      <h2>购买流程（{step + 1}/5）</h2>
      <form className="checkout-form" onSubmit={step === 4 ? handleSubmit : nextStep} autoComplete="off">
        {step === 0 && (
          <>
            <div className="form-row">
              <label>请选择类型 <span className="required">*</span></label>
              <label><input type="radio" name="userType" value="new" checked={form.userType === 'new'} onChange={handleChange} /> 第一次购卡</label>
              <label><input type="radio" name="userType" value="portin" checked={form.userType === 'portin'} onChange={handleChange} /> 携号转网</label>
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <div className="form-row">
              <label>美国邮编 <span className="required">*</span></label>
              <input type="text" name="usZip" value={form.usZip} onChange={handleChange} />
              {errors.usZip && <span className="form-error">{errors.usZip}</span>}
            </div>
            <div className="form-row">
              <label>手机IMEI <span className="required">*</span></label>
              <input type="text" name="imei" value={form.imei} onChange={handleChange} placeholder="请输入15位IMEI" />
              <div className="form-tip">手机拨*#06#可查到</div>
              {errors.imei && <span className="form-error">{errors.imei}</span>}
            </div>
            <div className="form-row">
              <label>所在院校 <span className="required">*</span></label>
              <label><input type="radio" name="schoolType" value="school" checked={form.schoolType === 'school'} onChange={handleChange} /> 所属学校</label>
              <label><input type="radio" name="schoolType" value="other" checked={form.schoolType === 'other'} onChange={handleChange} /> 非学生</label>
              {form.schoolType === 'school' && (
                <div style={{position:'relative'}}>
                  <input type="text" name="customSchool" value={form.customSchool} onChange={handleSchoolInput} placeholder="请输入学校名称" autoComplete="off" />
                  {schoolSuggestions.length > 0 && (
                    <ul className="autocomplete-list">
                      {schoolSuggestions.map(s => (
                        <li key={s} onClick={() => selectSchool(s)}>{s}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="cart-table">
              <div className="cart-header">
                <span>产品</span><span>描述</span><span>价格</span>
              </div>
              <div className="cart-row">
                <span>Verizon套餐</span><span>无限美国通话短信流量；5GB热点；墨西哥、加拿大漫游</span><span>$42.00</span>
              </div>
              <div className="cart-row">
                <span>邮寄服务</span><span>免费48小时美国国内邮寄</span><span>$0.00</span>
              </div>
              <div className="cart-row">
                <span>Nano SIM</span><span>适用iPhone5以上，三星Galaxy S6等手机</span><span>$0.00</span>
              </div>
              <div className="cart-row">
                <span>转入/激活</span><span>携号转入服务或新号激活服务</span><span>$20.00</span>
              </div>
              <div className="cart-row cart-total">
                <span>共计</span><span></span><span>$62.00</span>
              </div>
            </div>
            <div className="form-row">
              <label>优惠券</label>
              <input type="text" name="coupon" value={form.coupon} onChange={handleChange} placeholder="如有请输入" />
            </div>
            <div className="form-row">
              <label>收货方式</label>
              <label><input type="radio" name="delivery" value="express" checked={form.delivery === 'express'} onChange={handleChange} /> 快递到付</label>
              <label><input type="radio" name="delivery" value="self" checked={form.delivery === 'self'} onChange={handleChange} /> 自取</label>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="form-row">
              <label>国家 <span className="required">*</span></label>
              <input type="text" name="country" value={form.country} onChange={handleChange} />
              {errors.country && <span className="form-error">{errors.country}</span>}
            </div>
            <div className="form-row">
              <label>Address 1 <span className="required">*</span></label>
              <input type="text" name="address1" value={form.address1} onChange={handleChange} />
              {errors.address1 && <span className="form-error">{errors.address1}</span>}
            </div>
            <div className="form-row">
              <label>Address 2</label>
              <input type="text" name="address2" value={form.address2} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>City <span className="required">*</span></label>
              <input type="text" name="city" value={form.city} onChange={handleChange} />
              {errors.city && <span className="form-error">{errors.city}</span>}
            </div>
            <div className="form-row">
              <label>State <span className="required">*</span></label>
              <input type="text" name="state" value={form.state} onChange={handleChange} />
              {errors.state && <span className="form-error">{errors.state}</span>}
            </div>
            <div className="form-row">
              <label>Zipcode <span className="required">*</span></label>
              <input type="text" name="zipcode" value={form.zipcode} onChange={handleChange} />
              {errors.zipcode && <span className="form-error">{errors.zipcode}</span>}
            </div>
            <div className="form-row">
              <label>服务开始日期 <span className="required">*</span></label>
              <input type="date" name="serviceStartDate" value={form.serviceStartDate} onChange={handleChange} />
              {errors.serviceStartDate && <span className="form-error">{errors.serviceStartDate}</span>}
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div className="form-row">
              <label>银行卡号 <span className="required">*</span></label>
              <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="请输入16位银行卡号" />
              {errors.cardNumber && <span className="form-error">{errors.cardNumber}</span>}
            </div>
            <div className="form-row">
              <label>有效期 <span className="required">*</span></label>
              <input type="text" name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" />
              {errors.expiry && <span className="form-error">{errors.expiry}</span>}
            </div>
            <div className="form-row">
              <label>CVC <span className="required">*</span></label>
              <input type="text" name="cvc" value={form.cvc} onChange={handleChange} placeholder="3位数字" />
              {errors.cvc && <span className="form-error">{errors.cvc}</span>}
            </div>
          </>
        )}
        <div className="form-row step-btns">
          {step > 0 && <button className="checkout-submit" onClick={prevStep}>上一步</button>}
          <button className="checkout-submit" type="submit">{step === 4 ? '确认支付' : '下一步'}</button>
        </div>
      </form>
    </div>
  )
}

function OrderSuccess() {
  return <div className="page"><h2>支付成功</h2><p>订单信息和后续指引。</p></div>
}

function FAQ() {
  return <div className="page"><h2>常见问题</h2><p>解答用户常见疑问。</p></div>
}

function Contact() {
  return <div className="page"><h2>联系我们</h2><p>客服、联系方式、建议反馈。</p></div>
}

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 页面标题映射
  const pageTitles = {
    '/': '首页',
    '/plans': '套餐',
    '/checkout': '购买',
    '/order-success': '支付成功',
    '/faq': '常见问题',
    '/contact': '联系我们'
  };

  // 关闭菜单的函数
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 监听路由变化时关闭菜单
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const currentTitle = pageTitles[location.pathname] || '';
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <Link className="logo" to="/" onClick={closeMenu}>Fulink</Link>
          <button 
            className="menu-button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <div className={`nav-links${isMenuOpen ? ' show' : ''}`}>
            <NavLink to="/" end onClick={closeMenu}>首页</NavLink>
            <NavLink to="/plans" onClick={closeMenu}>套餐</NavLink>
            <NavLink to="/checkout" onClick={closeMenu}>购买</NavLink>
            <NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>联系我们</NavLink>
          </div>
        </div>
      </nav>
      <div className="container">
        {currentTitle && <div className="page-title">{currentTitle}</div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/checkout" element={<StepCheckout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App
