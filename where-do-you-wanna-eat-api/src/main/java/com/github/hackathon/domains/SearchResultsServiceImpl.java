package com.github.hackathon.domains;

import com.github.hackathon.exceptions.ApiError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SearchResultsServiceImpl implements SearchResultsService {

  @Autowired
  private RestTemplate restTemplate;

  public String getSearchResults(String string) {
    ResponseEntity<String> response;

    try {
      String requestUrl
          = "https://maps.googleapis.com/maps/api/place/textsearch/json?input=" + string
          + "&inputtype=textquery&fields=name,rating,opening_hours,place_id&radius=1&key=AIzaSyCJoZQo8YwkU6LNHDWwMcPwd9DY5Kl4Neo";
      response = restTemplate.getForEntity(
          requestUrl, String.class, string
      );
    } catch (Exception e) {
      e.printStackTrace();
      throw new ApiError();
    }

    return response.getBody();
  }

  public String getDetailsResults(String string) {
    ResponseEntity<String> response;

    try {
      String requestUrl
          = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + string
          + "&fields=name,rating,formatted_phone_number,icon,url,formatted_address&key=AIzaSyCJoZQo8YwkU6LNHDWwMcPwd9DY5Kl4Neo";
      response = restTemplate.getForEntity(
          requestUrl, String.class, string
      );
    } catch (Exception e) {
      e.printStackTrace();
      throw new ApiError();
    }

    return response.getBody();
  }

  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }
}
