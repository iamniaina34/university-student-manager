package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Mention;
import com.iamniaina34.studentmanagerserver.services.MentionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/mentions")
public class MentionController {

    @Autowired
    private MentionService mentionService;

    @GetMapping({"", "/", "/index"})
    public List<Mention> getAllMentions() {
        return mentionService.getAllMentions();
    }

    @GetMapping("/{id}")
    public Mention getMentionById(@PathVariable Integer id) {
        return mentionService.getMentionById(id);
    }

    @PostMapping("/create")
    public Mention createMention(@RequestBody Mention mention) {
        return mentionService.createMention(mention);
    }

    @PutMapping("/update/{id}")
    public Mention updateMention(@PathVariable Integer id, @RequestBody Mention mention) {
        return mentionService.updateMention(id, mention);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteMention(@PathVariable Integer id) {
        mentionService.deleteMention(id);
    }
}
