import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { JProject } from '@chris/interface/project';
import { SideBarLink } from '@chris/interface/ui-model/nav-link';
import { SideBarLinks } from '@chris/project/config/sidebar';
import { ProjectQuery } from '@chris/project/state/project/project.query';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
@UntilDestroy()
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  project: JProject;
  sideBarLinks: SideBarLink[];

  constructor(private _projectQuery: ProjectQuery) {
    this._projectQuery.all$.pipe(untilDestroyed(this)).subscribe((project) => {
      this.project = project;
    });
  }

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }
}
