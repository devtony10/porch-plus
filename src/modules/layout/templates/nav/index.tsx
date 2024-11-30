import LocalizedClientLink from "@/modules/common/components/localized-client-link"

export default function Nav() {
  return (
    <div className="flex-col">
      <section className="header-wrap z-30 sticky top-[0] left-[0] w-full [transition:top_0.5s]">
        <div className="head-skinny-wrap">
          <section className="relative">
            <div className="navigation-head-skinny-wrap">
              <div className="navigation-head flex items-center px-[1.06667rem] justify-between bg-[#ffffff] h-[clamp(3.73333rem,calc(3.73333rem+(16)*((100vw-1200px)/(1440-1200))),4.8rem)]
            [@media(min-width:780px)]:h-[clamp(4.26667rem,calc(4.26667rem+(8)*((100vw-1200px)/(1440-1200))),4.8rem)]
            [@media(min-width:1200px)]:px-[clamp(1.6rem,calc(1.6rem+(56)*((100vw-428px)/(1920-428))),5.33333rem)]
            ">
                <div className="navigation-logo w-[4.53333rem] leading-none ml-[48px]
                [@media(min-width:1200px)]:w-[calc(25%-5.6rem)] [@media(min-width:1200px)]:ml-0">
                  <LocalizedClientLink href="/" className="flex" data-testid="nav-link" aria-label="Porch+ Homepage">
                    Porch+
                  </LocalizedClientLink>
                </div>

                <div className="main-navigation-wrap hidden
                [@media(min-width:1200px)]:flex [@media(min-width:1200px)]:h-full [@media(min-width:1200px)]:w-[calc(50%-5.6rem)]
                main-navigation-wrap-middle [@media(min-width:1200px)]:items-center [@media(min-width:1200px)]:justify-center">
                  <nav className="main-navigation-links 
                main-navigation-links-middle" role="navigation" aria-label="main navigation">
                    <ul className="flex [list-style:none] ml-0 h-full">
                      <li><button className="" aria-label="Tenants" tabIndex={0} role="button">Tenants</button></li>
                      <li><button className="" aria-label="Landlords" tabIndex={0} role="button">Landlords</button></li>
                      <li><button className="" aria-label="Agents" tabIndex={0} role="button">Agents</button></li>
                      <li><button className="" aria-label="Blog" tabIndex={0} role="button">Blog</button></li>
                      <li><button className="" aria-label="About Us" tabIndex={0} role="button">About Us</button></li>
                    </ul>
                  </nav>
                </div>

                <div className="main-navigation-wrap hidden
                [@media(min-width:1200px)]:flex [@media(min-width:1200px)]:h-full [@media(min-width:1200px)]:w-[calc(25%-5.6rem)]
                main-navigation-wrap-right [@media(min-width:1200px)]:items-center [@media(min-width:1200px)]:justify-end">
                  <nav className="main-navigation-links
                  main-navigation-links-right">
                    <ul className="flex [list-style:none] ml-0 h-full">
                      <li className="icon-item account-item">
                        <a className="navigation-account" href="">
                          Log In
                        </a>
                      </li>
                      <li className="icon-item">
                        <a className="navigation-account" href="">
                          Create Account
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="navigation-mobile-account [@media(min-width:780px)]:gap-[1.06667rem] [@media(min-width:1200px)]:hidden">

                </div>

                {/* <SideMenu /> */}

              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="subheader-wrap w-full">
        <div className="subhead-skinny-wrap">
          <div className="relative">
            <div className="navigation-subhead-skinny-wrap">
              <div className="navigation-subhead">
                <div className="main-navigation-wrap hidden [@media(min-width:1200px)]:inline-flex [@media(min-width:1200px)]:h-full [@media(min-width:1200px)]:w-[calc(50%-5.6rem)]">

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>

  )
}