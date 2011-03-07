"""
This file demonstrates two different styles of tests (one doctest and one
unittest). These will both pass when you run "manage.py test".

Replace these with more appropriate tests for your application.
"""

from django.test import TestCase
from selenium import webdriver
import re

class JasmineTests(TestCase):
    def test_jasmine_suite(self):
        self.driver.get('http://localhost:8000/static-content/javascript/translette/test/SpecRunner.html')
        # Giving the JavaScript tests 10 seconds to complete
        self.driver.implicitly_wait(10)

        # This is the placeholder for the results of the Jasmine test-suite
        element = self.driver.find_element_by_class_name("description")
        
        # Extracting the number of JavaScript test-failures
        failures_regex = re.compile(r"\d+ specs, (\d+) failures in \d+[.]\d+s")
        num_failures = int(failures_regex.search(element.text).group(1))
        assert num_failures == 0

    def setUp(self):
        self.driver = webdriver.Chrome()

    def tearDown(self):
        self.driver.quit()
        pass
