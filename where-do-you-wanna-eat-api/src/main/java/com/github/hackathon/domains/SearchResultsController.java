package com.github.hackathon.domains;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/search-results")
@CrossOrigin(origins = "http://localhost:3000")
public class SearchResultsController {

  @Autowired
  private SearchResultsService searchResultsService;

  @GetMapping(value="/{string}")
  public ResponseEntity<String> getSearchResults(@PathVariable String string) {
    return new ResponseEntity<>(searchResultsService.getSearchResults(string), HttpStatus.OK);
  }
}
