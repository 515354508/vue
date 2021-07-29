for i in range(1,11):
    from selenium import webdriver
    import time
    driver=webdriver.Firefox()
    driver.maximize_window
    driver.get("http://account.ryjiaoyu.com/log-in")
    time.sleep(3)
    driver.find_element_by_xpath("//input[@id='Email']").clear()
    driver.find_element_by_xpath("//input[@id='Email']").send_keys("mmgss@qq.com")
    driver.find_element_by_xpath("//input[@id='Password']").clear()
    driver.find_element_by_xpath("//input[@id='Password']").send_keys("testpress")
    driver.find_element_by_xpath("//input[@value='登 录']").click()
    driver.quit()